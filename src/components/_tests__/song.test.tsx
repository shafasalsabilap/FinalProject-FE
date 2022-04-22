import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import data from '../../data/mocks/songData';
import { store } from '../../data/store';
import SongContainer from '../SongContainer';


test('Should show tracks component', () => {
    const { artists, Selected, uri, album } = data;
    const { container } = render(
        <Provider store={store}>
            <SongContainer
                artists={artists}
                selected={Selected}
                uri={uri}
                title={album.name}
                imgSrc={album.images[1].url}
                album={album.name}
                releasedate={album.release_date}
                handleSelect={() => {
                    Selected === false;
                }} />
        </Provider>);
    expect(container).toBeInTheDocument();

    const testid = screen.queryByTestId(/id .*/i);
    expect(testid).toBeInTheDocument();

}) 