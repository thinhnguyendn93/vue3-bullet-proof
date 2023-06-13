import FontIcon from 'components/FontIcon';
import { RESOURCES } from 'config/constants';

export default defineComponent({
  setup() {
    return (): JSX.Element => (
      <div>
        <img src={RESOURCES.FLAGS} />
        <FontIcon name="success-circle" cursor color="blue-ribbon" size="32" />
      </div>
    );
  },
});
