# Web Development — labs

Lab works from the **Web Development** course (KBTU): from plain HTML/CSS
to Angular front-ends and a Django back-end.

**Stack:** HTML · CSS · JavaScript · TypeScript · Angular · Python · Django

## Labs

| Folder | Topic | What's inside |
| --- | --- | --- |
| [`1st-lab`](1st-lab) | HTML & CSS basics | Exercises from Khan Academy, Udacity and W3Schools tutorials |
| [`2nd-lab`](2nd-lab) | Page layout | Static copies of the Facebook, Instagram and GitHub start pages |
| [`practise3`](practise3) | Page layout | Facebook-style profile page |
| [`3rd-lab`](3rd-lab) | JavaScript | JS fundamentals: data types, objects, code quality, logical operators; a small interactive page |
| [`4th-lab`](4th-lab) | Angular | Online store (Kaspi.kz products) and a starter Angular app |
| [`4th5th-lab`](4th5th-lab) | Angular | Online store extended with category hierarchy, components, likes and delete |
| [`6th-lab`](6th-lab) | Angular + HTTP | Album browser that loads data from a REST API |
| [`7th-lab`](7th-lab) | Python | Practice problems (CodingBat, HackerRank, Informatics) and models for a small app |
| [`8th-lab`](8th-lab) | Django | Online store back-end: `Category` and `Product` models with an API |

## Running

Angular apps (`4th-lab`, `4th5th-lab`, `6th-lab`):

```bash
cd 6th-lab/album-browser
npm install
npm start
```

Django back-end (`8th-lab`):

```bash
cd 8th-lab
pip install django
python manage.py migrate
python manage.py runserver
```

Set the `DJANGO_SECRET_KEY` environment variable for anything beyond local development.
