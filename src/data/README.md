# VC++ Website Data Configuration

This folder contains all the customizable content for the VC++ website. You can easily modify these files to update information without touching the code.

## Files Overview

### `siteConfig.ts`
Contains basic site information that appears across the website:
- Site name and tagline
- Contact information (email, meeting times, social media links)
- Club mission and values
- What the club offers (main feature cards)

### `leadership.ts`
Leadership team member information:
- Name, position, bio
- Contact information (email, LinkedIn, GitHub)
- Profile initials for display

### `events.ts`
Event management data:
- Upcoming events with registration info
- Past events for historical reference
- Event types: workshop, hackathon, talk, meeting, social

### `projects.ts`
Project showcase information:
- Student/club projects
- Technologies used
- GitHub/live links
- Project categories and status

### `resources.ts`
Learning resources and useful links:
- Tutorials, documentation, tools
- Categorized by type and difficulty
- External links to helpful resources

## How to Customize

1. **Update Contact Info**: Edit `siteConfig.ts` to change meeting times, location, email, or social media links.

2. **Add New Leadership**: Edit `leadership.ts` to add/remove team members or update their information.

3. **Manage Events**: 
   - Add upcoming events to `upcomingEvents` array in `events.ts`
   - Move past events from `upcomingEvents` to `pastEvents`
   - Update registration links and availability

4. **Showcase Projects**: Add new projects to `projects.ts` with all relevant information and links.

5. **Update Resources**: Add helpful learning resources to `resources.ts` organized by category.

## Important Notes

- **URLs**: Make sure all external links start with `https://`
- **Dates**: Use YYYY-MM-DD format for consistency
- **Images**: Add project images to the `/public` folder and reference them
- **Registration Links**: Update event registration links to your actual forms

## Quick Setup Checklist

- [ ] Update club contact information in `siteConfig.ts`
- [ ] Replace sample leadership team with actual members
- [ ] Add real upcoming events with registration links
- [ ] Showcase actual club projects
- [ ] Review and update resource links
- [ ] Update social media links to actual accounts