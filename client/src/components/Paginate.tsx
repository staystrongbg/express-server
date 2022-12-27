type Props = {
  pageNum: number[];
  paginate: (page: number) => void;
};

const Paginate: React.FC<Props> = ({ pageNum, paginate }) => {
  const PAGINATION_STYLE = {
    width: '100%',
    gap: '5px',
    display: 'flex',
  };

  const LI_STYLE = {
    cursor: 'pointer',
    border: '1px solid #f4f3f2',
    boxShadow: '1px 1px 10px rgba(4,2,2,0.6)',
    width: '30px',
    height: '30px',
    color: '#010101',
    background: '#f4f3f2',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <ul className={`${PAGINATION_STYLE} flex-center`} style={PAGINATION_STYLE}>
      {pageNum?.map((page, idx) => (
        <li style={LI_STYLE} key={idx} onClick={() => paginate(page)}>
          {page}
        </li>
      ))}
    </ul>
  );
};

export default Paginate;
