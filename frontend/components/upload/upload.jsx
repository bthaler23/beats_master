import React from 'react';

class Upload extends React.Component {

  constructor(props) {
    super(props);

    this.state = {title: "", genre: "", imageFile: null, imageUrl:null, songFile: null, songUrl: null};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.updateSong = this.updateSong.bind(this);
    this.updateImage = this.updateImage.bind(this);

  }



  handleTitle(e) {
    let title = e.target.value;
    this.setState({title});
  }

  handleGenre(e) {
    let genre = e.target.value;
    this.setState({genre});
  }

  updateSong(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({songFile: file, songUrl: fileReader.result});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  updateImage(e) {
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    var formData = new FormData();
    formData.append("song[title]", this.state.title);
    formData.append("song[genre]", this.state.genre);
    if (this.state.imageFile) {
    formData.append("song[image]", this.state.imageFile);
    }
    formData.append("song[song]", this.state.songFile);

    this.props.createSong(formData).then( ({song}) => (this.props.router.push(`/songs/${song.id}`)));
  }

  render() {
    return (
      <section className="upload_page">
        <div className="upload_form_container" >
          <form className="upload_form" onSubmit={this.handleSubmit}>
            <div className="upload_form_content" >
            <div className="upload_img">
              <img src={this.state.imageUrl}/>
              <label className="image_file_container"> Upload Image
                <input type="file" onChange={this.updateImage} />
              </label>
            </div>
            <div className="upload_form_text">
              <input type="file" onChange={this.updateSong}/>
              <input type="text" onChange={this.handleTitle} value={this.state.title} placeholder="Title" />
              <input type="text" onChange={this.handleGenre} value={this.state.genre} placeholder="Genre" />
            </div>
            </div>
            <div className="upload_form_submit">
              <input type="submit" value="Upload Song!"/>
            </div>
          </form>
        </div>
      </section>
    );
  }


}

export default Upload;
