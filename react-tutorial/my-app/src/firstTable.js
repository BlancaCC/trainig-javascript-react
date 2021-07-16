import './styles/firstTable.css'

const dataTable = [
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "postId": 1,
      "id": 2,
      "name": "quo vero reiciendis velit similique earum",
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    }];
  
  
  function Header (props) {
      const columnNames = props.columnNames;
  
      const head = columnNames.map( e => 
                      <th> {e}</th>
                  );
      return (
          <thead>
              <tr> {head}</tr>
          </thead>
      );
  }
  function OneRow(props) {
      const row = props.row;
      const rowRender = props.columnNames.map( colunm =>
          <td> {row[colunm]}</td>);
  
      return rowRender;
  }
  
  function Table ( props) {
  
      const columnNames = props.columnNames;
      const rowsRender = props.rows.map( r =>
              <tr>
                  <OneRow 
                      columnNames={columnNames}
                      row={r}
                  />
              </tr>
          );
      
      return(
          <div>
              <h2 className='Subtitle'> Foo table</h2>
              <p> 
                  Create a table is easy peace (at least when you have already done some).
                   We have worked with Composition instead of with inheritance 
                   and used list and keys. 
            </p>
             <table className='FirstTable'>
                 <Header columnNames={columnNames} />
                 {rowsRender}
            </table> 
        </div>  
        );
  
  }

  function Objective () {

    const objectives = [
        'List and keys', 
        'Composition'
    ];

    const component = objectives.map(o =>
        <li> {o} </li>);


    return (
        <>
        <ul className="Objective">{component}</ul>
        </>
    );

  }

  export {Table, dataTable, Objective};
  