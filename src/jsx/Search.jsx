import Inferno from 'inferno';
import Component from 'inferno-component';
import eight from './utilities/eighttracks.js';
import List from './List.jsx';
import '../scss/Search.scss';

export default class Search extends Component {
  constructor() {
    super();
    this.state = { tags: [] };
    this.search = this.search.bind(this);
  }

  search({ target }) {
    eight.search({ q: target.value, per_page: 10 }).then(res => {
      this.setState({ tags: res.tag_cloud.tags });
    });
  }

  render() {
    return (
      <section className="Search">
        <input
          type="text"
          placeholder="Search for any activity, artist, genre or mood..."
          onKeyup={ this.search }
        />
        <List
          items={ this.state.tags }
          addTag={ this.props.addTag }
        />
      </section>
    );
  }
}