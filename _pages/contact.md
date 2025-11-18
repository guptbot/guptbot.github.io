---
permalink: /
layout: stacked
index: 4
show_profile: false
sidebar_title: Contact
---

<div id="contact"></div>

I'm always looking to meet new people and would love to chat! Feel free to email me at [vedantgupta@gmail.com](mailto:vedantgupta@gmail.com)

<div style="margin-top: 2rem; text-align: center;">
  {% if site.author.github %}<a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener">GitHub</a> | {% endif %}
  {% if site.author.twitter %}<a href="https://twitter.com/{{ site.author.twitter | remove: '@' }}" target="_blank" rel="noopener">Twitter</a> | {% endif %}
  {% if site.author.linkedin %}<a href="https://linkedin.com/in/{{ site.author.linkedin }}" target="_blank" rel="noopener">LinkedIn</a> | {% endif %}
  {% if site.author.googlescholar %}<a href="{{ site.author.googlescholar }}" target="_blank" rel="noopener">Google Scholar</a> | {% endif %}
  <a href="{{ base_path }}/files/resume.pdf" target="_blank" rel="noopener">Resume</a>
</div>
