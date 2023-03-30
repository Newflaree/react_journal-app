import { AppRouter } from "./router";
// App Theme
import { AppTheme } from "./themes";

export const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
}
