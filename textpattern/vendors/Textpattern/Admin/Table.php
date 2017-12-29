<?php

/*
 * Textpattern Content Management System
 * https://textpattern.com/
 *
 * Copyright (C) 2017 The Textpattern Development Team
 *
 * This file is part of Textpattern.
 *
 * Textpattern is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, version 2.
 *
 * Textpattern is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Textpattern. If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * List tables.
 *
 * @since   4.7.0
 * @package Admin\Table
 */

namespace Textpattern\Admin;

class Table
{
    /**
     * Textpattern event (panel) to which this table applies.
     *
     * @var string
     */

    protected $event = null;

    /**
     * Constructor.
     *
     * @param string $evt    Textpattern event (panel)
     */

    public function __construct($evt = null)
    {
        global $event;

        if ($evt === null) {
            $evt = $event;
        }

        $this->event = $evt;
    }

    /**
     * Renders a widget to display lists.
     *
     * @param  array    $data Current search/pagination settings
     * @return string      HTML
     */

    public function render($data = array(), $search = null, $create = null, $content = null, $footer = null)
    {
        $event = $this->event;
        $out = '';
        extract($data + array(
            'heading' => 'tab_'.$event, 'total' => 0, 'criteria' => 1
        ));

        $out .= n.'<div class="txp-layout">'.
            n.tag(
                hed(gTxt($heading), 1, array('class' => 'txp-heading')),
                'div', array('class' => 'txp-layout-4col-alt')
            ).n;

        $out .= $search.n.tag_start('div', array(
                'class' => 'txp-layout-1col',
                'id'    => $event.'_container',
            )).$create.n.tag_start('div', array(
                'id'    => 'txp-list-container',
            ));

        if ($total >= 1) {
            $out .= script_js('$(".txp-search").show()');
        } elseif ($criteria == 1) {
            $out .= script_js('$(".txp-search").hide()');
        }

        $out .= $content;
        $out .= n.tag_start('div', array(
                'class' => 'txp-navigation',
                'id'    => $event.'_navigation',
                'style' => $total < 1 ? 'display:none' : false
            )).
            $footer.
            n.tag_end('div').
            n.'</div>'. // End of #txp-list-container.
            n.'</div>'. // End of .txp-layout-1col.
            n.'</div>'; // End of .txp-layout.

        return $out;
    }
}
