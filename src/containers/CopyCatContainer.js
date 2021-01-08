import React from "react";
import { CopyCat } from "../components/CopyCat";

export class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copying: true,
    };

    this.toggleTape = this.toggleTape.bind(this);
  }

  toggleTape() {
    this.setState({ copying: !this.state.copying });
  }

  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;

    return <CopyCat copying={copying} toogleTape={toggleTape} />;
  }
}
