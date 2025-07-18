import {useEffect, useState} from 'react';

const Record = (props) => (
<tr>
    <td>
        {props.record.name}
    </td>
    <td>
        {props.record.position}
    </td>
    <td>
        {props.record.level}
    </td>
    <td>
        <div>
            <link to={'/edit/${props.record._id}'}>
            Edit
            </link>
            <button onClick={() => {
                props.deleteRecord(props.record._id);
            }}>
                Delete

            </button>
        </div>
    </td>
</tr>
);


export default function RecordList (){

const [records, setRecords] = useState([]);

useEffect(( ) => {
    async function getRecords(){
        const response = await fetch('http://localhost:5000/record/');
        if(!response.ok) {
            const message = 'Are error occurred: ${response.statusText}';
            console.error(message);
            return;}
            const records =await response.json();
            setRecords(records)
    }
    getRecords();

}, [records.length]);


async function deleteRecord(id) {
    await fetch('http://localhost:5000/record/${id}', {method: "DELETE"});
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
}


function recordList(){
    return records.map((record) => {
        return (
            <Record record={record}
            deleteRecord={() => deleteRecord(record._id)}
            key={record._id}
            /> )
});
}

    return (
        <>
        <h3> Employee Records</h3>
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                position
                            </th>
                            <th>
                                level
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {recordList()}
                    </tbody>
                </table>
            </div>
        </div>

        </>
    );
}