/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ContentPage.scss';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Form from './../Form.js'
import Text from './../Text.js'

class ContentPage extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    var cardStyle = {
      display: 'inline-block',
      margin: '24px',
      margintop: '2px',
      transitionDuration: '0.3s',
      textAlign: 'centre'
    }
    this.context.onSetTitle(this.props.title);
    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.props.path === '/' ? null : <h1>{this.props.title}</h1>}
          <div dangerouslySetInnerHTML={{ __html: this.props.content || '' }} />
        </div>
        <Card style={cardStyle}>
          <CardTitle title="Let's Do This" subtitle="2016" />
          <CardText>
            Please select from the below
          </CardText>
          <Form>
            <Text
              name="URL Entry"
              placeholder="Type your theme here"
              label="URLEntry"/>
          </Form>
          <CardActions>
            <RaisedButton primary={true} label="Song Entry" href="entry"/>
            <RaisedButton primary={true} label="Theme Score" href="score"/>
          </CardActions>
        </Card>

      </div>

    );
  }

}

export default withStyles(ContentPage, s);
