function TodoRowItem(props) {
    // props stands for properties and props is going to have a key value pair of every item you just passed
    return (
        // JSX Must only have one parent element
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

// This command allows us to now use this component within our application
export default TodoRowItem