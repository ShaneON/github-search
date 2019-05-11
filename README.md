# github-search

This is my completed github search project. I have included all the features requested
except the public/private toggle as I don't have access to repos like that.

The screen has up to 30 repos per page, there are buttons at the foot of the page to move to the next
pages.

There are a couple of small tests written, acceptance and integration. The acceptance is is failing
with an odd bug but I don't have time to investigate.

I removed my testing auth token from the headers in the adapters.
It was just as follows "Authorization: 'token foobar'".
