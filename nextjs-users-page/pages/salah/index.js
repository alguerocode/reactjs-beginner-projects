import Link from 'next/link';
import styles from '../../styles/salah.module.css'
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    props: {
      users: data
    }
  }
}
const Salah = ({ users }) => {
  return (
    <div>
      <h1>welcome to the salah page</h1>
      {users.map(user => (
        <Link key={user.id} href={`/salah/${user.id}`}>
          <a className={styles.single}>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Salah;