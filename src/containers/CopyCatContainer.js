import React from "react";
import { CopyCat } from "../components/CopyCat";

export class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copying: true,
      input: "",
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({ copying: !this.state.copying });
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;

    return (
      <CopyCat
        name="Maciek"
        copying={copying}
        toggleTape={toggleTape}
        onChange={this.handleChange}
        inputValue={this.state.input}
      />
    );
  }
}
