import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../Widget';

const ResultWidget = ({ results }) => (
  <Widget>
    <Widget.Header>
      Tela de Resultado:
    </Widget.Header>
    <Widget.Content>
      <p>
        Você acertou
        {' '}
        {results.filter((x) => x).length}
        {' '}
        perguntas
      </p>
      <ul>
        {results.map((result, index) => (
          <li key={`result__${result}`}>
            #
            {index + 1}
            {' '}
            Resultado:
            {result === true
              ? ' Acertou'
              : ' Errou'}
          </li>
        ))}
      </ul>
    </Widget.Content>
  </Widget>
);

ResultWidget.propTypes = {
  results: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default ResultWidget;
