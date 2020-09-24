import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const LoadingComponent: React.FC<{
  inverted?: boolean;
  content?: string;
}> = (inverted) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader>Loading Activities...</Loader>
    </Dimmer>
  );
};

export default LoadingComponent;
