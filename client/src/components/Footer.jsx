import css from './style/Footer.module.css'

function Footer() {
    return (
        <footer className={css.container}>
            <section>
                <p className={css.text}>© 2022 Created and Built by Michaela Andreasson and Aram Mohammed</p>
            </section>
        </footer>
    )
}

export default Footer