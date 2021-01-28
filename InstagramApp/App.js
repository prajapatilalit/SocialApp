import React from "react";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { ApplicationProvider } from "react-native-ui-kitten";
import ApplicationContent from "./ApplicationContent";

const App = () => {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <ApplicationContent />
    </ApplicationProvider>
  );
};
export default App;
