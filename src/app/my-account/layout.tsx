import styles from './MyAccount.module.sass'

interface MyAccountLayoutProps {
  children: React.ReactNode;
  ordersInfo: React.ReactNode;
  userInfo: React.ReactNode;
}

export default async function MyAccountLayout(props: MyAccountLayoutProps) {
  return (
    <div className={styles.myAccount}>
      {props.children}
      <main className={styles.myAccount__panels}>
        {props.userInfo}
        {props.ordersInfo}
      </main>
    </div>
  );
}