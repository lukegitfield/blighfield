    const artworks = [
      { src: 'assets/images/image1.jpg',   artist: 'Alexander Grahovsky', title: 'Club de fans de W. Anderson' },
      { src: 'assets/images/image2.jpg',   artist: 'David Horgan',        title: 'untitled' },
      { src: 'assets/images/image3.jpg',   artist: 'Errol Theunissen',    title: 'Please give me my dinner' },
      { src: 'assets/images/Image 4.jpg',  artist: 'Errol Theunissen',    title: 'The Visitor' },
      { src: 'assets/images/image5.jpg',   artist: 'Euan Roberts',        title: "Boys Don't Cry" },
      { src: 'assets/images/image6.jpg',   artist: 'Unknown artist',      title: 'Snowy Mountains' },
      { src: 'assets/images/image7.jpg',   artist: 'Luke Maund',          title: 'Fracture' },
      { src: 'assets/images/image8.jpg',   artist: 'Mark Malarko',        title: 'Sr. Fresa' },
      { src: 'assets/images/image9.png',  artist: 'Samantha Kerdine',    title: 'Pont Aven (Laurent)' },
      { src: 'assets/images/image10.jpg',  artist: 'Trevor Small',        title: 'Cowboy 1' },
      { src: 'assets/images/image11.png',  artist: 'Marija Tiurina',      title: 'untitled' },
      { src: 'assets/images/image12.png',  artist: 'Riccardo Solesin',    title: 'Hyko' },
      { src: 'assets/images/image13.png',  artist: 'Unknown artist',      title: 'untitled' },
    ];

    let current = 0;

    function openLightbox(index) {
      current = index;
      updateLightbox();
      document.getElementById('lightbox').classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      document.getElementById('lightbox').classList.remove('active');
      document.body.style.overflow = '';
    }

    function updateLightbox() {
      const a = artworks[current];
      document.getElementById('lightbox-img').src = a.src;
      document.getElementById('lightbox-img').alt = a.title;
      document.getElementById('lb-artist').textContent = a.artist;
      document.getElementById('lb-title').textContent = a.title;
    }

    function navLightbox(dir, e) {
      e && e.stopPropagation();
      current = (current + dir + artworks.length) % artworks.length;
      updateLightbox();
    }

    function handleLightboxClick(e) {
      if (e.target === document.getElementById('lightbox')) closeLightbox();
    }

    document.addEventListener('keydown', e => {
      if (!document.getElementById('lightbox').classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navLightbox(-1);
      if (e.key === 'ArrowRight') navLightbox(1);
    });