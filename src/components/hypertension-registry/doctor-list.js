import {useState} from 'react';
import doctorServices from '../../services/doctor.services';
export default function DoctoryList(){
const[doctors,setDoctors]=useState([]);
const[status,setStatus]=useState('');
const[state,setState]=useState('');
const[search,setSearch]=useState();
onst[search,setSearch]=useState(false);
const getAll=(search,state,status)=>{
  doctorServices.getAll(search,state,status)
  .then((response) => {
    setDoctors(response.data);
    console.log(response.data);
  })
  .catch((e) => {
    console.log(e);
  });
}
const getSearch=(e)=>{
  setSearch(e.target.value)
  getAll(search,status,state);
}
const getStatus=(e)=>{
  setStatus(e.target.value)
  getAll(search,status,state);
}
const getState=(e)=>{
  setState(e.target.value)
  getAll(search,status,state);
}

    return(
        <div>
             <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-12">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active admin_text">Doctors List
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <div className="form">
              <label htmlFor="Search" placeholder='Search by phoneno'></label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={search}
                onKeyUp={getSearch}
                onChange={getSearch}
                name="title"
              />
            </div>
            <div className="form">
              <label htmlFor="Search" placeholder='Search by phoneno'></label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={search}
                onKeyUp={getSearch}
                onChange={getSearch}
                name="title"
              />
            </div>
      
      <table>
        <thead><tr><th>Id</th><th>Name</th></tr></thead>
        <tbody>
          {doctors.map((obj)=>(
            <tr><td>{obj.id}</td><td>{obj.name}</td></tr>
          ))}
        </tbody>
      </table>
        </div>
    );
}