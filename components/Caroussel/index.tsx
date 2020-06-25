import './styles.sass'
import Column from '../Column'

const defaultColumns = Array(3).fill(null).map((_, idx) => ({ id: idx }));

const Caroussel = ({ columns = defaultColumns, ...props }) => (
    <div className="caroussel">
        {
            columns.map(({ id }, idx) =>
                <Column key={`${id}`} />
            )
        }
    </div>
);

export default Caroussel
