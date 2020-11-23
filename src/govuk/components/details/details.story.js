import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/details/fixtures.json';
import { Details } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('details', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <Details {...example.options} />);
}
