import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Landing, Movie, TvShow, Search, Gallery, NotFound } from './pages';

function Routes() {


    return (
        <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/movie/:id" component={Movie} />
                    <Route path="/tvshow/:id" component={TvShow} />
                    <Route path="/search" component={Search} />
                    <Route path="/gallery/:media_type/:id" component={Gallery} />
                    <Route  component={NotFound} />
                </Switch>
        </BrowserRouter>

    );
}

export default Routes