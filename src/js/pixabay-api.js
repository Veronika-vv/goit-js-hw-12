import axios from 'axios';

async function fetchPhoto(query, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '46879011-f5a6ed2cfca5d42a53859b3a6',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page,
      per_page: 15,
    },
  });
  return response;
}

export { fetchPhoto };
