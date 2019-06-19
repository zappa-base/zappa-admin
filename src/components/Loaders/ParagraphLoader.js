import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

export function ParagraphLoader({
  height,
  width,
  primaryColor,
  secondaryColor
}) {
  return (
    <div style={{ height, width }}>
      <ContentLoader
        height={height}
        width={width}
        speed={1}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      >
        <rect x="0" y="14" rx="3" ry="3" width="350" height="6" />
        <rect x="0" y="34" rx="3" ry="3" width="320" height="6" />
        <rect x="0" y="54" rx="3" ry="3" width="330" height="6" />
        <rect x="0" y="74" rx="3" ry="3" width="320" height="6" />
        <rect x="0" y="94" rx="3" ry="3" width="370" height="6" />
        <rect x="0" y="114" rx="3" ry="3" width="350" height="6" />
      </ContentLoader>
    </div>
  );
}

ParagraphLoader.propTypes = {
  height: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  width: PropTypes.number
};

ParagraphLoader.defaultProps = {
  height: 160,
  primaryColor: '#a3a3a3',
  secondaryColor: '#a3a3a3',
  width: 400
};
