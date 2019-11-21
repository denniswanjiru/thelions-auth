const spitCommonProps = (props) => {
  return `
    margin-top: ${props.mt || 0}px
    color: ${props.color || '#000'};
    margin-bottom: ${props.mb || 0}px;
    font-weight: ${props.weight || 600};
  `;
}

export default spitCommonProps;