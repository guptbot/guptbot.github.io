---
permalink: /
layout: stacked
index: 4
show_profile: false
sidebar_title: Contact
---

I'm always looking to meet new people and would love to chat! Feel free to email me at [vedantgupta@gmail.com](mailto:vedantgupta@gmail.com)

<div class="profile-social-icons" style="justify-content: center; margin-top: 2rem;">
  {% if site.author.github %}
  <a href="https://github.com/{{ site.author.github }}" title="GitHub" class="profile-icon" target="_blank" rel="noopener">
    <i class="fab fa-github"></i>
  </a>
  {% endif %}

  {% if site.author.twitter %}
  <a href="https://twitter.com/{{ site.author.twitter | remove: '@' }}" title="Twitter" class="profile-icon" target="_blank" rel="noopener">
    <i class="fab fa-twitter"></i>
  </a>
  {% endif %}

  {% if site.author.linkedin %}
  <a href="https://linkedin.com/in/{{ site.author.linkedin }}" title="LinkedIn" class="profile-icon" target="_blank" rel="noopener">
    <i class="fab fa-linkedin"></i>
  </a>
  {% endif %}

  {% if site.author.googlescholar %}
  <a href="{{ site.author.googlescholar }}" title="Google Scholar" class="profile-icon" target="_blank" rel="noopener">
    <i class="ai ai-google-scholar"></i>
  </a>
  {% endif %}
</div>
