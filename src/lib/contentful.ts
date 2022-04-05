import * as contentful from 'contentful';

export const contentClient = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_DELIVERY_API_TOKEN
});
