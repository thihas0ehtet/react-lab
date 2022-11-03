import React, { useReducer, FC, ReactNode, createContext } from 'react';

import en from '../lang/en.json';
import mm from '../lang/mm.json';


enum LangActionType {
  SET_LANGUAGE = 'SET_LANGUAGE'
}

interface LangState {
  language: string;
}

interface LangStateProps {
  children: ReactNode;
}

interface SetLanguageAction {
  type: typeof LangActionType.SET_LANGUAGE;
  payload: string;
}

interface ContextProps {
  state: LangState;
  dispatch: {
    setLanguage: (lang: string) => void;
    translate: (key: string) => string;
  }
}

const langReducer = (state: LangState, action: SetLanguageAction): LangState => {
  switch (action.type) {
    case LangActionType.SET_LANGUAGE:
      return {
        language: action.payload
      }
    default:
      return state;
  }
}

const localStorageLang = localStorage.getItem('language');
const initialState = {
  language: localStorageLang ? localStorageLang : 'MM'
}

export const LangContext = createContext({} as ContextProps);

const LanguageState: FC<LangStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer(langReducer, initialState);

  const setLanguage = (lang: string) => {
    localStorage.setItem('language', lang);
    dispatch({
      type: LangActionType.SET_LANGUAGE,
      payload: lang
    });
  }

  const translate = (key: string): string => {
    const { language } = state;
    let langData: { [key: string]: string } = {};

    if (language === 'EN') {
      langData = en;
    } else if (language === 'MM') {
      langData = mm;
    }

    return langData[key];
  }

  return (
    <LangContext.Provider value={{ state, dispatch: { setLanguage, translate } }}>
      {children}
    </LangContext.Provider>
  );
}

export default LanguageState;