import Image from 'next/image';
import styles from '@/styles/Header.module.css';

function Header() {
    return (
        <header className={`${styles.header} flex-ctr-centered`} >
            <div className='flex-ctr-centered'>

                <Image src="/breezybrad.jpg" height={200} width={200}/>
                <h1>Hi I'm Brad Pearson, a human person </h1>            
            </div>
        </header>
    )
}

export default Header; 