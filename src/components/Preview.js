import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { usePopper } from 'react-popper';


const Preview = ({ content, children, border }) => {
  const [isPreviewVisible, setPreviewVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'right',
    modifiers: [
      {
        name: 'arrow',
        enabled: true,
        options: {
          element: arrowElement,
          padding: 4,
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 24],
        },
      },
    ],
  });

  const onMouseEnter = useCallback(() => setPreviewVisible(true), [setPreviewVisible]);
  const onMouseLeave = useCallback(() => setPreviewVisible(false), [setPreviewVisible]);

  return (
    <>
      <div
        ref={setReferenceElement}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </div>
      <Preview.Container
        ref={setPopperElement}
        isVisible={isPreviewVisible}
        hasBorder={border}
        style={styles.popper}
        {...attributes.popper}
      >
        <Preview.Arrow
          ref={setArrowElement}
          style={styles.arrow}
          {...attributes.arrow}
        />
        {content}
      </Preview.Container>
    </>
  );
};

export default React.memo(Preview);

Preview.propTypes = {
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  border: PropTypes.bool,
};

Preview.defaultProps = {
  border: true,
};

Preview.Container = styled.div`
  border: ${p => p.hasBorder && '1px solid #000'};
  opacity: ${p => p.isVisible ? 1 : 0};
  z-index: 10;
  pointer-events: none;

  img {
    max-width: 16rem;
    max-height: 16rem;
    display: block;
    image-rendering: auto;
  }
`;

Preview.Arrow = styled.div``;
