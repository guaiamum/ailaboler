import './styles.sass'
import Column from '../Column'

type CarousselProps = {
    columns: Column[]
}

const Caroussel = ({ columns }: CarousselProps) => (
    <div className="caroussel">
        {
            columns.map((column) => (
                <Column key={`${column.id}`}{...column} />
            ))
        }
    </div>
);

export default Caroussel
