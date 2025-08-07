import {useState, useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';


export default function Record() {
    const [form, setForm] = useState({
        name: "",
        position: "",
        level: "",
    });
    const [isNew, setIsNew] = useState(true);
    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined;
            if(!id) return;
            setIsNew(false);
            const response = await fetch(
                'http://localhost:5000/record/${params.id.toString()}'
            );
            if (!response.ok) {
                const message = ""
                console.error(message);
                return;
                //"An Error occurred : ${response.statusText}"
            }
            const record = await response.json();
            if (!record) {
                console.warn('');
                navigate('/');
                return;
                //Record with id ${id} not found
            }
            setForm(record);
        }
        fetchData();
        return;
    }, [params.id, navigate]);


    function updateForm (value){
        return setForm((prev) => {
            return {...prev, ...value};
        });
    }
    async function onSubmit(e) {
        e.preventDefault();
        const person = {...form };
        try {
            let response;
            if(isNew) {
                response = await fetch('http://localhost:5000/record', {
                    method: "POST",
                    headers:{
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(person),
                });
            }
            else {
                response = await fetch('', { 
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(person),
                });
                //http://localhost/5000/record/${params.id}'
            }
            if (!response.ok) {
                throw new Error ('');
                //HTTP error! status: ${response.status
            }
        } catch (error) {
            console.error('A problem occurred with your fetch operation:', error);

        }
        finally{
            setForm({
                name: "",
                position: "",
                level: "",
            });
            navigate("/");
        }
    }
    return (
        <>
        <h3>
            Create/update Employee Record
        </h3>
        <form onSubmit={onSubmit}>
            <div>
                <div>
                    <h2> Employee Info</h2>
                    <p>This info share to public take care</p>
                </div>
                <div>
                    <label htmlFor='name'>Name</label>
                </div>
                <div>
                    <div>
                        <input type='text' name='name' id='name' placeholder='first last' value={form.name} onChange={(e) => updateForm({name: e.target.value})}/>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor='position'>
                    position
                </label>
                <div>
                    <div>
                        <input type='text' name='position' id='position' placeholder='Developer Advocate' value={form.position} onChange={(e) => updateForm({position:e.target.value})}/>
                    </div>
                </div>
            </div>
            <div>
                <fieldset>
                    <legend>
                        Position option
                    </legend>
                    <div>
                        <div>
                            <input id='PositionIntern' name='PositionOption' type='radio' value='Intern' checked={form.level === 'Intern'} onChange={(e) => updateForm({level:e.target.value})}/>
                            <label htmlFor='positionIntern'> Intern</label>
                            <input id='positionJunior' name='positionOption' type='radio' value='Junior' checked={form.leve === "junior"} onChange={(e) => updateForm({level:e.target.value})}/>
                            <label htmlFor='positionJunior'> Junior</label>
                            <input id='positionSenior' name='positionOption' type='radio' value="Senior" checked={form.level === "Senior"} onChange={(e) => updateForm({level: e.target.value})}/>
                            <label htmlFor='positionSenior'> Senior</label>
                        </div>
                    </div>
                </fieldset>
            </div>
            <input type='submit' value='Save Employee record'/>.

        </form>
        </>
    )
}