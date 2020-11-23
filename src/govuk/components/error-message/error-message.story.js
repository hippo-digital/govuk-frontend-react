import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/error-message/fixtures.json';
import { ErrorMessage } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('error-message', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <ErrorMessage {...example.options} />);
}
