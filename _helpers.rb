require 'action_view'

module Helpers
  include ActionView::Helpers::TagHelper

  def variable(name)
    begin
      page.send(name)
    rescue
      return nil
    end
  end

  def layout_type
    variable('layout_type') || 'internal_page'
  end

  def guest_detail(name, id, state, items, image = 'default.png')
    result = ''
    if state
      result += tag('img', :src => "images/flags/#{state}.gif", :class => 'flag')
    else
      result += tag('img', :src => "images/flags/default.gif", :class => 'flag') 
    end
    name_and_flag = name
    name_and_flag += ' / ' + state unless state.blank?
    result += content_tag('a', name_and_flag, :href => "#guest_#{id}", :class => 'guest_name')

    detail_result = ''
    detail_result += tag('img', :src => "images/guests/#{image}", :class => 'photo')
    detail_result += guest_description_list(name, items)
    detail_result = content_tag('div', detail_result, :id => "guest_#{id}")
    result += content_tag('div', detail_result, :class => 'guest_detail')

    content_tag('li', result)
  end

  protected
  def guest_description_list(name, items)
    result = ''
    result += content_tag('li', name, :class => 'name')
    unless items.empty?
      items.each do |item|
        result += content_tag('li', item)
      end
    end
    content_tag 'ul', result
  end

  def css_tag(href, options = {})
    options[:rel] ||= 'stylesheet'
    options[:type] ||= 'text/css'
    options[:href] = static_url("/css/#{href}")
    options[:media] ||= 'screen'
    tag('link', options)
  end

  def script_tag(source, options = {})
    options[:src] = static_url("/js/#{source}")
    options[:type] ||= 'text/javascript'
    content_tag('script', '', options)
  end

  def image_tag(source, options = {})
    options[:src] = static_url("/images/#{source}")
    tag('img', options)
  end

  protected
  def static_url(base_url)
    path = File.join("#{File.expand_path(File.dirname(__FILE__))}", base_url)
    if File.exist?(path)
      base_url + '?' + File.new(path).ctime.to_time.to_i.to_s
    else
      base_url
    end
  end
end
