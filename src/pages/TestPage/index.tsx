import { useParams } from 'react-router-dom'
import FormModal from '../../components/FormModal';


export default  function TestPage () {
  // Accessing the id parameter from the URL
  const params = useParams()
  return (
    <div>
      <h2>Test Page</h2>
      <p>ID: {params.id}</p>
      <FormModal/>
    </div>
  );
}