import LanguageState from "./Lang"
import { VariableProvider } from "./Variable"

export function Context({ children }: { children: any }) {
    return (
        <LanguageState>
            <VariableProvider>
                {children}
            </VariableProvider>
        </LanguageState>
    )
}


