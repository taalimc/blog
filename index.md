---
layout: page
---
<section class="line bg-blue">
    <div class="mc-content">
        <div class="lastUnit size2of3 centered below48">
            {% for post in site.posts limit:1 %}

                <p class="c-blue-dark fwb full-width alignc nomargin">VOLUME {{ post.volume }}, ISSUE {{ post.issue }}</p>

                <h1 class="alignc c-white a-white fwl below30"><a href="{{ post.link }}">{{ post.title }}</a></h1>

                <div class="c-white a-white p-full-width below24">{{ post.content }}</div>

                {% if post.author %}
                    <div class="selfclear">
                        {% for author in post.author %}
                            {% assign i = site.data.authors[author] %}
                            <div class="unit size1of3 full-width-mobile pad-l0 c-white a-white">
                                <img class="rounded float-left mar-lv2 mar-tb0 mar-l0" src="{{ i.image }}" alt="{{ i.name }}{% if i.title %}, {{ i.title }}{% endif %}" style="max-width:50px;">
                                <p class="nomargin"><a href="{{ i.link }}" target="_blank">{{ i.name }}</a></p>
                                <p class="fsi small-meta">{{ i.title }}</p>
                            </div>
                        {% endfor %}
                    </div>
                {% endif %}


                <p class="alignr a-white full-width"><a href="{{ post.link }}">Continue reading...</a></p>
            {% endfor %}
        </div>
    </div>
</section>

{% include subscribe.html %}

<section class="past-issues selfclear bg-gray-bar pad-lv6 pad-lr0 pad-b0" id="past-issues">
    <div class="mc-content selfclear pad-lv6 pad-lr0 pad-b0">
        <div class="content">

            <h2 class="fwl alignc">Recent Newsletters</h2>

            <ul class="c-cardGrid">
                {% assign showVolumeMeta = true %}
                {% for post in site.posts offset:1 limit:5 %}
                    {% include card.html %}
                {% endfor %}

                <li class="c-cardItem alignc">
                    <div class="mar-lv8 mar-lr0 pad-lv4 pad-lr0 full-width">
                        <a href="/archive/">View full archive...</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div class="mar-lv8 mar-lr0 alignc">
        <img role="presentation" src="{{ site.url }}/assets/freddie_wink.svg" alt="Freddie von Chimpenheimer IV" height="60">
    </div>
</section>

<script type="text/javascript">
$('.author-image').hover(function () {
        $(this).parents('.author-wrapper').find('.author-bubble').fadeIn("fast");
    }, function () {
        $(this).parents('.author-wrapper').find('.author-bubble').fadeOut("fast");
    }
);
</script>
