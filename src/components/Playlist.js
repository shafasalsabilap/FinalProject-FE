import Button from '@mui/material/Button';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const Playlist = ({ handlePlaylist, handlePlaylistSubmit, addPlaylist, myFunction }) => {
    return (
        <div className="form-playlist">
            <h2>Create Playlist</h2>
            <form onSubmit={handlePlaylistSubmit}>
                <label>Name</label><br />
                <input id="title" type="text" value={addPlaylist.title} onChange={handlePlaylist} name="title" minLength="10" />
                <br />
                <br></br>
                <label> Description </label><br />
                <textarea id="description" type="text" value={addPlaylist.description} onChange={handlePlaylist} name="description" />
                <br/>
                <br/>
                
                <Button type="submit" style={{ backgroundColor: 'black', color: 'white',}} value="Submit" variant="contained" color="success" startIcon={<SaveAltIcon />}
                nClick={() => {alert("After klik this alert, Your playlist will saved in your spotify! ");}}> SAVE </Button> 
                  <script>
                    (myFunction/)
                </script>
            </form>
        </div>
    )
}

export default Playlist;