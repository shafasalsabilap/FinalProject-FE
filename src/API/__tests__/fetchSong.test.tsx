import { render, screen, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node'
import { rest } from 'msw';
import data from '../../data/mocks/songData';
import { store } from '../../data/store';
import SongContainer from '../../components/SongContainer';
import { Provider } from 'react-redux';

const server = setupServer(
    rest.get(`https://api.spotify.com/v1/search?q=test&type=track&access_token=accessToken`, (req, res, ctx) => {
        return res(ctx.json(data));
    }),
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should successfully fetch data and show the data for song', async () => {
    const { artists, Selected, uri, album} = data;
    render(<Provider store={store}>
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

    const testid = screen.queryByTestId(/id .*/i);
    await waitFor(() => {
        return expect(testid).toBeInTheDocument();
    });
})