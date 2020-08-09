import './styles.sass'

const Column = ({ title: columnTitle, items }: Column) => (
    <section className="column">
        <h2 className="title">{columnTitle}</h2>
        {
            items.map(({ id, title, text }) => (
                <article key={id} className="item">
                    <h3>{title}</h3>
                    <p>
                        {text}
                    </p>
                </article>
            ))
        }
    </section>
);

export default Column
