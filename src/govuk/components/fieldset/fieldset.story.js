import React from 'react';
import { storiesOf } from '@storybook/react';
import fixtures from 'govuk-frontend/govuk/components/fieldset/fixtures.json';
import { Fieldset } from '.';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('fieldset', module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <Fieldset {...example.options} />);
}
