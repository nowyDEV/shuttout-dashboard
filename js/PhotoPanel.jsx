// @flow

import React from 'react';
import { Segment, Image, Grid } from 'semantic-ui-react';

const PhotoPanel = (props: { lastUploadedData: ShuttoutPhoto, ofTheDayData: ShuttoutPhoto }) =>
  <Segment>
    <Grid doubling columns={2}>
      <Grid.Column>
        <Image
          fluid
          label={{ as: 'a', color: 'black', content: 'Photo of the day', icon: 'like', ribbon: true }}
          src={props.lastUploadedData.data.url}
        />
      </Grid.Column>

      <Grid.Column>
        <Image
          fluid
          label={{ as: 'a', color: 'black', content: 'Recently uploaded', icon: 'cloud upload', ribbon: true }}
          src={props.ofTheDayData.data.url}
        />
      </Grid.Column>
    </Grid>
  </Segment>

export default PhotoPanel;
