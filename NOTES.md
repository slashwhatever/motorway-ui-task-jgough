Performance:

I'd look to improve performance by host images on a CDN like Cloudinary where you could request smaller image sizes be gernerated on the fly and cached for subsequent requests for future users

Initially I added a lazy load library to handle image loading on demand - i.e. only when they're visible in the viewport - but then had to write an Intersection Observer anyway to handle infinite loading in the image grid.

Form validation is done with yup and yupResolver for tight TS

I also had to update the server port from 5000 to 5005 to deal with something that was already using that port on my machine.
