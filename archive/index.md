---
layout: page
---

{% assign vol1posts = site.posts | where: "volume", 1 %}
{% assign vol2posts = site.posts | where: "volume", 2 %}

<section class="line bg-blue">
    <div class="mc-content">
        <div class="lastUnit size2of3 centered below24">
            <h1 class="alignc c-white fwl nomargin">Archives</h1>
        </div>
    </div>
</section>

<section class="past-issues selfclear bg-gray-bar2 pad-lv6 pad-lr0 pad-b0" id="past-issues">
    <div class="mc-content selfclear pad-lv6 pad-lr0 pad-b0">
        <div class="content line">

            <div class="lastUnit size1of1">
                <h2 class="h3 fwl below18">Volume 2</h2>

                <ul class="c-cardGrid sub-section">
                    {% for post in vol2posts %}
                        {% include card.html %}
                    {% endfor %}
                </ul>

                <h2 class="h3 fwl below18">Volume 1</h2>

                <ul class="c-cardGrid sub-section">
                    {% for post in vol1posts %}
                        {% include card.html %}
                    {% endfor %}
                </ul>

            </div>
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
