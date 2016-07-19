/**
 * Created by johnstonb on 14/07/2016.
 */
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SongEntryPage.scss';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Form from './../Form.js'
import Text from './../Text.js'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import YoutubeAutocomplete from '../YoutubeSearch/YoutubeAutocomplete.js'

const title = 'Song Entry';

class SongEntryPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.props.path === '/' ? null : <h1>{this.props.title}</h1>}
          <div dangerouslySetInnerHTML={{ __html: this.props.content || '' }} />

        <Card style={s.cardStyle}>
          <CardTitle title="Please Enter Your Songs" subtitle="2016" />
          <Form>
            <DropDownMenu
              value={this.state.value}
              onChange={this.handleChange}
              style={s.dropdownStyle.customWidth}
              autoWidth={false}
            >
              <MenuItem value={1} primaryText="Theme" />
              <MenuItem value={2} primaryText="Blue" />
              <MenuItem value={3} primaryText="Rock" />
              <MenuItem value={4} primaryText="Pop" />
              <MenuItem value={5} primaryText="Jazz" />
            </DropDownMenu>
            <YoutubeAutocomplete
              maxresults="10"
              apiKey="AIzaSyB7A5zHn2Bd7F6FktdkW4JFLtWTyD3jeq0"
              />
          <Text
              style ={s.textStyle}
              name="Youtube URL Entry"
              placeholder="Youtube URL"
              label="URLEntry"/>
          </Form>
          <CardActions>
            <RaisedButton secondary={true} label="Back"/>
            <RaisedButton primary={true} label="Save"/>
          </CardActions>
        </Card>
        </div>
        </div>
    );
  }
}

export default withStyles(SongEntryPage, s);

