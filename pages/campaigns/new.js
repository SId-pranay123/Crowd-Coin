import React, { Component } from "react";
import Layout from "../../components/Layout";
import {
  FormField,
  Button,
  Form,
  Input,
  Message,
} from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import Router from "next/router";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    errorMessage: "",
    loading:false
  };

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({loading:true, errorMessage:''});

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0]
        });

        Router.push("/");
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
    this.setState({loading:false});
  };
  render() {
    return (
      <Layout>
        <h3> Create a campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <FormField>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={(event) =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </FormField>

          <Message
            error
            header="OOPS!!"
            content={this.state.errorMessage}
          />
          <Button loading={this.state.loading} primary type="submit">
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
