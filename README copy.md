# Tech-Yeti Software Solutions — B2 Promotional Website

This is the B2 promotional website for Tech-Yeti Software Solutions.

## Website structure

- `index.html` — Home / company introduction
- `about.html` — About Tech-Yeti, mission, values and team photo
- `services.html` — Company services and capabilities
- `products.html` — Zero Incident, Tech-Yeti's first product, with product screenshots
- `team.html` — Team overview and portfolio links
- `team/*.html` — Individual team portfolios
- `contact.html` — Enquiry / demo request form

## Local host — easiest method (Python)

1. Extract the ZIP file.
2. Open the extracted `TechYeti_B2_Company_Website_FormSubmit_Fixed` folder in VS Code or a terminal.
3. Open a terminal inside that folder.
4. Run:

   ```bash
   python -m http.server 8000
   ```

5. Open this address in your browser:

   `http://localhost:8000`

6. To stop the server, return to the terminal and press `Ctrl + C`.

### Alternative — VS Code Live Server

1. Open the website folder in VS Code.
2. Install the **Live Server** extension if it is not already installed.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The site will open in your browser using a local address such as `http://127.0.0.1:5500`.

## Content notes

Tech-Yeti is presented as the company. Zero Incident is presented as the company's first product and as a concrete example of the team's capabilities.

The Services page intentionally focuses on company capabilities and does not include a separate prototype-demonstration section. The Contact page intentionally uses a single professional enquiry form rather than the previous “What you can ask us about” panel.

The supplied team photograph is stored at:

`assets/team/tech-yeti-team.jpeg`

Individual portfolios use text-based professional sections: About, Experience, Education and Skills. No personal/project images are used on those portfolio pages.

The Contact form is configured to forward requests to `bi95ny@student.sunderland.ac.uk` through FormSubmit. Complete the first-time email confirmation described below before relying on the form.
### Team portfolio photos
The individual portfolio pages use the team photographs supplied for the project:
- Safal Sharma → `assets/team/portfolio/safal-sharma.jpg`
- Sushil Gaihre → `assets/team/portfolio/sushil-gaihre.jpg`
- Bipin Paija → `assets/team/portfolio/bipin-paija.jpg`
- Jiban Thapa Magar → `assets/team/portfolio/jiban-thapa-magar.png`

The correct spelling is **Bipin Paija** throughout the website.


## Demo request email setup (Vercel + FormSubmit — free option)

The Contact form submits to FormSubmit's AJAX endpoint and sends enquiries to **bi95ny@student.sunderland.ac.uk**. This version does not need a Resend API key, a custom sender domain, or Vercel environment variables.

1. Deploy this updated folder to Vercel.
2. Open the live `/contact.html` page and send one test enquiry.
3. Check `bi95ny@student.sunderland.ac.uk` Inbox, Spam and Junk folders for the FormSubmit activation/confirmation email.
4. Open that confirmation email and click the activation link. FormSubmit requires first-time confirmation before it will forward submissions to the recipient.
5. Send a second test enquiry and verify that the complete message arrives. Do not rely only on the green/success form message; confirm delivery in the mailbox.

Official instructions: https://formsubmit.co/documentation and https://formsubmit.co/ajax-documentation

### Updating a Vercel Drop deployment

- Extract this ZIP.
- Open the extracted `TechYeti_B2_Company_Website_FormSubmit_Fixed` folder and ensure `index.html`, `contact.html`, `assets/`, `team/` (if present) and other website pages are at the top level of the folder.
- In your Vercel project, drop/upload the **extracted folder contents** to create a new deployment. Do not upload the ZIP file itself.
- Once Vercel reports **Ready**, test `/contact.html` again.

### Local preview

You can preview the static site with Python by opening a terminal in this folder and running `python -m http.server 8000`, then visit http://localhost:8000. Email submission uses FormSubmit and therefore requires an internet connection and first-time recipient activation.

### Notes

- The recipient email is configured in `assets/demo-request.js` as `bi95ny@student.sunderland.ac.uk`.
- The email entered by the visitor is used as the reply-to address; visitors should enter their own email address.
- FormSubmit applies its own spam protection/confirmation workflow and retains submissions for a limited period. Review its current documentation for details.
- This website submits visitor-entered contact details to an external form-delivery provider. Tell visitors about this in the site's privacy notice before using it publicly.
